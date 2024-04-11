import { useEffect, useState } from "react";
import DefaultTemplate from "../../templates/DefaultTemplate/DefaultTemplate";
import Picture from "../../atoms/Picture/Picture";
import Dropdown from "../../molecules/Dropdown/Dropdown";
import hero from "../../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import { fetchAll } from "../../../api/aboutApi";
import FadeLoader from "../../atoms/FadeLoader/FadeLoader";

interface DataItem {
	title: string;
	content: string;
}

export default function About() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<DataItem[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetchAll();
			setData(result);
		};
		fetchData();
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<DefaultTemplate>
			{loading && <FadeLoader />}
			<div className='filter'>
				<Picture src={hero} alt="Description de l'image" rounded='md' />
			</div>
			<div className='flex flex-column items-center gap-8 m-8'>
				{data &&
					data.map((item, index) => (
						<div key={index}>
							<Dropdown
								title={item.title}
								option={item.content}
								maxWidth='max-w-aboutDropdown'
							/>
						</div>
					))}
			</div>
		</DefaultTemplate>
	);
}
