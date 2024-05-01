import { NavButtonModel } from './nav-button.model';

export class NavButtonConstants {
	public static Models: NavButtonModel[] = [
		{
			url: '/partners',
			signature: 'Партнерам',
			image: {
				src: 'assets/images/icons/peoples.svg',
				alt: 'Партнерам',
				height: '45px',
				width: '45px',
			},
		},
		{
			url: 'https://google.com',
			signature: 'Наши проекты',
			image: {
				src: 'assets/images/icons/setting.svg',
				alt: 'Наши проекты',
				height: '45px',
				width: '45px',
			},
		},
		{
			url: '/faq',
			signature: 'FAQ',
			image: {
				src: 'assets/images/icons/faq.svg',
				alt: 'FAQ',
				height: '45px',
				width: '45px',
			},
		},
	];
}