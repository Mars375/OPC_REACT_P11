import { Link } from "react-router-dom";
import DefaultTemplate from "../../templates/DefaultTemplate/DefaultTemplate";
import { Typography } from "../../atoms/";

export default function error() {
	return (
		<DefaultTemplate>
			<div className='flex flex-column gap-custom items-center pb-14'>
				<Typography
					color='primary'
					weight='font-bold'
					size='xs:font-size-4xl lg:font-size-custom'
				>
					404
				</Typography>
				<Typography color='primary'>
					Oups! La page que vous demandez n'existe pas.
				</Typography>
				<Link to='/'>
					<Typography className='xs:font-size-sm lg:font-size-lg'>
						Retourner sur la page d’accueil
					</Typography>
				</Link>
			</div>
		</DefaultTemplate>
	);
}
