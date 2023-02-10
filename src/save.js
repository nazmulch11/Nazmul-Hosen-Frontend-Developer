
import { useBlockProps } from '@wordpress/block-editor';
import apiFetch from "@wordpress/api-fetch";
import {useState} from "@wordpress/element"

export default function save() {

	const [capsuleData, setCapsuleData] = useState("");

	apiFetch( { path: '/spacex/v1/capsules' } ).then( ( response ) => {
		return response.json()
	} ).then((result)=>{
		setCapsuleData(result)
		console.log(result)
	});

	return (
		<p { ...useBlockProps.save() }>
			{
				capsuleData
			}
		</p>
	);
}
