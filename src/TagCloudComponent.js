import React, { useEffect, useRef, useState } from "react";

class FibonacciSphere {
  #points;

  get points() {
    return this.#points;
  }

  constructor(N) {
    this.#points = [];

    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const radius = Math.sqrt(1 - y ** 2);
      const a = goldenAngle * i;
      const x = Math.cos(a) * radius;
      const z = Math.sin(a) * radius;

      this.#points.push([x, y, z]);
    }
  }
}
class TagsCloud {
  #root;
  #size;
  #sphere;
  #tags;
  #rotationAxis;
  #rotationAngle;
  #rotationSpeed;
  #frameRequestId;

  constructor(root, cursorRef) {
    if (!root) {
      throw new Error("Invalid root element");
    }
    this.#root = root;
    this.#size = this.#root.offsetWidth;
    this.#tags = root.querySelectorAll(".tag");
    this.#sphere = new FibonacciSphere(this.#tags.length);
    this.#rotationAxis = [1, 0, 0];
    this.#rotationAngle = 0;
    this.#rotationSpeed = 0;

    this.#updatePositions();
    this.#initEventListeners(cursorRef);
    this.#root.classList.add("-loaded");
  }

  #initEventListeners() {
    window.addEventListener("resize", this.#updatePositions.bind(this));
    document.addEventListener("mousemove", (e) => {
      this.updateRotation(e);
    });
  }

  #updatePositions() {
    const sin = Math.sin(this.#rotationAngle);
    const cos = Math.cos(this.#rotationAngle);
    const ux = this.#rotationAxis[0];
    const uy = this.#rotationAxis[1];
    const uz = this.#rotationAxis[2];

    const rotationMatrix = [
      [
        cos + ux ** 2 * (1 - cos),
        ux * uy * (1 - cos) - uz * sin,
        ux * uz * (1 - cos) + uy * sin,
      ],
      [
        uy * ux * (1 - cos) + uz * sin,
        cos + uy ** 2 * (1 - cos),
        uy * uz * (1 - cos) - ux * sin,
      ],
      [
        uz * ux * (1 - cos) - uy * sin,
        uz * uy * (1 - cos) + ux * sin,
        cos + uz ** 2 * (1 - cos),
      ],
    ];

    const N = this.#tags.length;

    for (let i = 0; i < N; i++) {
      const x = this.#sphere.points[i][0];
      const y = this.#sphere.points[i][1];
      const z = this.#sphere.points[i][2];

      const transformedX =
        rotationMatrix[0][0] * x +
        rotationMatrix[0][1] * y +
        rotationMatrix[0][2] * z;
      const transformedY =
        rotationMatrix[1][0] * x +
        rotationMatrix[1][1] * y +
        rotationMatrix[1][2] * z;
      const transformedZ =
        rotationMatrix[2][0] * x +
        rotationMatrix[2][1] * y +
        rotationMatrix[2][2] * z;

      const translateX = (this.#size * transformedX) / 2;
      const translateY = (this.#size * transformedY) / 2;
      const scale = (transformedZ + 2) / 3;
      const transform = `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;
      const opacity = (transformedZ + 1.5) / 2.5;

      this.#tags[i].style.transform = transform;
      this.#tags[i].style.opacity = opacity;
    }
  }

  updateRotation(e) {
    const rootRect = this.#root.getBoundingClientRect();
    const deltaX = e.clientX - (rootRect.left + this.#root.offsetWidth / 2);
    const deltaY = e.clientY - (rootRect.top + this.#root.offsetHeight / 2);
    const a = Math.atan2(deltaX, deltaY) - Math.PI / 2;
    const axis = [Math.sin(a), Math.cos(a), 0];
    const delta = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const speed = delta / Math.max(window.innerHeight, window.innerWidth) / 10;

    this.#rotationAxis = axis;
    this.#rotationSpeed = speed;
  }

  #update() {
    this.#rotationAngle += this.#rotationSpeed;

    this.#updatePositions();
  }

  start() {
    this.#update();

    this.#frameRequestId = requestAnimationFrame(this.start.bind(this));
  }

  stop() {
    cancelAnimationFrame(this.#frameRequestId);
  }
}

const TagCloudComponent = () => {
  const tagsCloudRef = useRef(null);
  const cursorRef = useRef(null);

  const [cloud, setCloud] = useState(null);

  useEffect(() => {
    if (tagsCloudRef.current && cursorRef.current) {
      const newCloud = new TagsCloud(tagsCloudRef.current);
      setCloud(newCloud);
      newCloud.start();

      const onMouseMove = (e) => {
        if (cursorRef.current) {
          if (!cursorRef.current.classList.contains("-activated")) {
            cursorRef.current.classList.add("-activated");
          }
          cursorRef.current.style.transform = `translateX(${e.clientX}px) translateY(${e.clientY}px)`;
        }
        newCloud.updateRotation(e);
      };

      document.addEventListener("mousemove", onMouseMove);

      return () => {
        if (newCloud) {
          newCloud.stop();
        }
        document.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, [tagsCloudRef, cursorRef]);

  const styles = {
    // cursor: {
    //   position: "absolute",
    //   top: -16,
    //   left: -16,
    //   zIndex: 0,
    //   height: 32,
    //   width: 32,
    //   borderRadius: "50%",
    //   background: "#e0e1dd",
    //   opacity: 0,
    // },
    tagsCloud: {
      position: "absolute",
      top: "calc(50% - 30vmin)",
      left: "calc(50% - 30vmin)",
      height: "50vmin",
      width: "50vmin",
      zIndex: 0,
      listStyle: "none",
      opacity: 1,
    },
    tag: {
      position: "absolute",
      top: "50%",
      left: "50%",
      fontSize: "4vmin",
      fontWeight: "bold",
      transition: "transform .5s linear, opacity .5s linear",
    },
    wrap: {
      display: "inline-block",
      transform: "translateX(-50%) translateY(-50%)",
    },
  };

  return (
    <>
      <div id="cursor" ref={cursorRef} style={styles.cursor}></div>
      <ul className="tags-cloud" ref={tagsCloudRef} style={styles.tagsCloud}>
        <li className="tag" style={styles.tag}>
          <span className="wrap" style={styles.wrap}>
            HTML
          </span>
        </li>
        <li className="tag" style={styles.tag}>
          <span className="wrap" style={styles.wrap}>
            css
          </span>
        </li>
        <li className="tag" style={styles.tag}>
          <span className="wrap" style={styles.wrap}>
            javascript
          </span>
        </li>
        <li className="tag" style={styles.tag}>
          <span className="wrap" style={styles.wrap}>
            git
          </span>
        </li>
        <li className="tag" style={styles.tag}>
          <span className="wrap" style={styles.wrap}>
            Photoshop
          </span>
        </li>
        <li className="tag" style={styles.tag}>
          <span className="wrap" style={styles.wrap}>
            Illustrator
          </span>
        </li>
        <li className="tag" style={styles.tag}>
          <span className="wrap" style={styles.wrap}>
            React
          </span>
        </li>
        <li className="tag" style={styles.tag}>
          <span className="wrap" style={styles.wrap}>
            Premiere Pro
          </span>
        </li>
        <li className="tag" style={styles.tag}>
          <span className="wrap" style={styles.wrap}>
            After Effects
          </span>
        </li>
      </ul>
    </>
  );
};

export default TagCloudComponent;
