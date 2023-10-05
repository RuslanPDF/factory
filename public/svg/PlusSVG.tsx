import React, {FC, SVGAttributes} from 'react';
import Link from "next/link";

type Props = SVGAttributes<SVGElement>;

const PlusSvg: FC<Props> = ({...props}: Props): JSX.Element => {
	return (
		<Link href={'/add/'}>
			<svg {...props} width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_1_3)" filter="url(#filter0_d_1_3)">
					<path d="M24.9634 0.6008L24.9634 44.0741H27.2254L27.2254 0.6008H24.9634Z" fill="#00B132"/>
					<path d="M47.8312 21.2064H4.35791V23.4684H47.8312V21.2064Z" fill="#00B132"/>
				</g>
				<defs>
					<filter id="filter0_d_1_3" x="0" y="0" width="52" height="53" filterUnits="userSpaceOnUse"
					        colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						               result="hardAlpha"/>
						<feOffset dy="4"/>
						<feGaussianBlur stdDeviation="2"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3" result="shape"/>
					</filter>
					<clipPath id="clip0_1_3">
						<rect width="44" height="45" fill="white" transform="translate(4)"/>
					</clipPath>
				</defs>
			</svg>
		</Link>
	);
};

export default PlusSvg;