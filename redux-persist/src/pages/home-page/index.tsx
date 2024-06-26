import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
} from '@heroicons/react/20/solid';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import { Link } from 'react-router-dom';

const productsList = [
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	// More products...
];

const products = [
	{
		name: 'Analytics',
		description: 'Get a better understanding of your traffic',
		href: '#',
		icon: ChartPieIcon,
	},
	{
		name: 'Engagement',
		description: 'Speak directly to your customers',
		href: '#',
		icon: CursorArrowRaysIcon,
	},
	{
		name: 'Security',
		description: 'Your customers’ data will be safe and secure',
		href: '#',
		icon: FingerPrintIcon,
	},
	{
		name: 'Integrations',
		description: 'Connect with third-party tools',
		href: '#',
		icon: SquaresPlusIcon,
	},
	{
		name: 'Automations',
		description: 'Build strategic funnels that will convert',
		href: '#',
		icon: ArrowPathIcon,
	},
];
const callsToAction = [
	{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
	{ name: 'Contact sales', href: '#', icon: PhoneIcon },
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}
const HomePage = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<>
			<header className="bg-white">
				<nav
					className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
					aria-label="Global"
				>
					<div className="flex lg:flex-1">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img
								className="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								alt=""
							/>
						</a>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<Popover.Group className="hidden lg:flex lg:gap-x-12">
						<Popover className="relative">
							<Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
								Product
								<ChevronDownIcon
									className="h-5 w-5 flex-none text-gray-400"
									aria-hidden="true"
								/>
							</Popover.Button>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
									<div className="p-4">
										{products.map((item) => (
											<div
												key={item.name}
												className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
											>
												<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
													<item.icon
														className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
														aria-hidden="true"
													/>
												</div>
												<div className="flex-auto">
													<a
														href={item.href}
														className="block font-semibold text-gray-900"
													>
														{item.name}
														<span className="absolute inset-0" />
													</a>
													<p className="mt-1 text-gray-600">
														{item.description}
													</p>
												</div>
											</div>
										))}
									</div>
									<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
										{callsToAction.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
											>
												<item.icon
													className="h-5 w-5 flex-none text-gray-400"
													aria-hidden="true"
												/>
												{item.name}
											</a>
										))}
									</div>
								</Popover.Panel>
							</Transition>
						</Popover>

						<a
							href="#"
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							Features
						</a>
						<a
							href="#"
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							Marketplace
						</a>
						<a
							href="#"
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							Company
						</a>
					</Popover.Group>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<Link
							to={'/login'}
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							Log in <span aria-hidden="true">&rarr;</span>
						</Link>
					</div>
				</nav>
				<Dialog
					as="div"
					className="lg:hidden"
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
				>
					<div className="fixed inset-0 z-10" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
									alt=""
								/>
							</a>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									<Disclosure as="div" className="-mx-3">
										{({ open }) => (
											<>
												<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
													Product
													<ChevronDownIcon
														className={classNames(
															open ? 'rotate-180' : '',
															'h-5 w-5 flex-none'
														)}
														aria-hidden="true"
													/>
												</Disclosure.Button>
												<Disclosure.Panel className="mt-2 space-y-2">
													{[...products, ...callsToAction].map((item) => (
														<Disclosure.Button
															key={item.name}
															as="a"
															href={item.href}
															className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
														>
															{item.name}
														</Disclosure.Button>
													))}
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
									<a
										href="#"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										Features
									</a>
									<a
										href="#"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										Marketplace
									</a>
									<a
										href="#"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										Company
									</a>
								</div>
								<div className="py-6">
									<a
										href="#"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										Log in
									</a>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>

			<div className="bg-white">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900">
						Customers also purchased
					</h2>

					<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{productsList.map((product) => (
							<div key={product.id} className="group relative">
								<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
									<img
										src={product.imageSrc}
										alt={product.imageAlt}
										className="h-full w-full object-cover object-center lg:h-full lg:w-full"
									/>
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
											<a href={product.href}>
												<span aria-hidden="true" className="absolute inset-0" />
												{product.name}
											</a>
										</h3>
										<p className="mt-1 text-sm text-gray-500">
											{product.color}
										</p>
									</div>
									<p className="text-sm font-medium text-gray-900">
										{product.price}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
