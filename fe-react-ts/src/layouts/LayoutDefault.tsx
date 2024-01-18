import Content from './content';
import Footer from './Footer';
import Header from './header';

const LayoutDefault = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Content>
				<h1>Content</h1>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil a id
				adipisci impedit maiores, sint velit, ad rerum ex porro pariatur officia
				ipsum consectetur dolorum modi in voluptatem nulla iure.
			</Content>
			<Footer />
		</div>
	);
};

export default LayoutDefault;
