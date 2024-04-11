import React from "react";
import styles from "./FadeLoader.module.scss";

const FadeLoader: React.FC = () => {
	return (
		<div className={styles.loaderBackground}>
			<div className={styles.loader}></div>
		</div>
	);
};

export default FadeLoader;
