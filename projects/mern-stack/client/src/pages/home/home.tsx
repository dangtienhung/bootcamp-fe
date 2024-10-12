import Aside from './components/aside';
import Card from './components/card';
import { useAuth } from '@/contexts/auth.context';

const HomePage = () => {
	const { isAuthenticated } = useAuth();
	console.log("🚀 ~ HomePage ~ isAuthenticated:", isAuthenticated)

	return (
		<main className="container flex flex-grow px-4 py-8 mx-auto">
			<Aside />

			<section className="w-9/12">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
					{[...Array(6)].map((_, index) => {
						return <Card key={index} />;
					})}
				</div>
			</section>
		</main>
	);
};

export default HomePage;
