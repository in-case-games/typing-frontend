import { NavButtonModel } from './nav-button.model';

export class NavButtonConstants {
	public static Models: NavButtonModel[] = [
		{
			url: 'https://t.me/x_DarkBull_x',
			signature: 'Партнерам',
			image: {
				src: 'assets/images/icons/peoples.svg',
				alt: 'Партнерам',
				height: '25px',
				width: '25px',
			},
		},
		{
			url: 'https://github.com/in-case-games',
			signature: 'Мои проекты',
			image: {
				src: 'assets/images/icons/setting.svg',
				alt: 'Мои проекты',
				height: '25px',
				width: '25px',
			},
		},
		{
			url: '/faq',
			signature: 'FAQ',
			image: {
				src: 'assets/images/icons/faq.svg',
				alt: 'FAQ',
				height: '25px',
				width: '25px',
			},
		},
	];
}
