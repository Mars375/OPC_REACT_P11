import { Link } from "react-router-dom";
import "./NotFoundPage.module.scss";
import DefaultTemplate from "../../templates/DefaultTemplate/DefaultTemplate";
import { Typography } from "../../atoms/";

import styles from "./NotFoundPage.module.scss";

export default function error() {
	return (
		<DefaultTemplate>
			<div className={`${styles.mainContainer} mt-custom`}>
				<Typography color='primary' weight='bold' size='font-size-custom'>
					404
				</Typography>
				<Typography color='primary'>
					Oups! La page que vous demandez n'existe pas.
				</Typography>
				<Link to='/'>
					<Typography>Retourner sur la page d’accueil</Typography>
				</Link>
			</div>
		</DefaultTemplate>
	);
}
