import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { TSize } from "@/types/product.type";
import { Minus, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type ProductSizeProps = {
	variants: TSize[];
	onVariantSelect: (variant: TSize | null, quantity: number) => void;
};

const ProductSize = ({ variants, onVariantSelect }: ProductSizeProps) => {
	const [selectedSize, setSelectedSize] = useState<string | null>(null);
	const [selectedColor, setSelectedColor] = useState<string | null>(null);
	const [quantity, setQuantity] = useState(1);

	// get unique sizes
	const uniqueSizes = useMemo(() => {
		const sizes = new Set(variants.map((v) => v.size));
		return Array.from(sizes).map((size) => ({
			size,
			_id: variants.find((v) => v.size === size)?._id ?? "",
		}));
	}, [variants]);

	// get available colors
	const availableColors = useMemo(() => {
		if (selectedSize) {
			return variants.filter((v) => v.size === selectedSize);
		} else {
			const uniqueColors = new Set(variants.map((v) => v.color));
			return Array.from(uniqueColors).map((color) => ({
				color,
				_id: variants.find((v) => v.color === color)?._id ?? "",
			}));
		}
	}, [selectedSize, variants]);

	// handle size change
	const handleSizeChange = (size: string) => {
		setSelectedSize(size);
		setSelectedColor(null); // Reset color when size changes
		setQuantity(1);
	};

	// handle color change
	const handleColorChange = (colorId: string) => {
		setSelectedColor(colorId);
		setQuantity(1);
	};

	// get selected variant
	const selectedVariant = useMemo(() => {
		if (selectedSize && selectedColor) {
			return variants.find(
				(v) => v.size === selectedSize && v._id === selectedColor
			);
		}
		return null;
	}, [selectedSize, selectedColor, variants]);

	// handle change quantity
	const handleQuantityChange = (value: number) => {
		if (selectedVariant) {
			setQuantity(Math.max(1, Math.min(value, selectedVariant.quantity)));
		}
	};

	useEffect(() => {
		onVariantSelect(selectedVariant ?? null, quantity);
	}, [selectedVariant, onVariantSelect]);

	return (
		<div className="space-y-4">
			<div>
				<h3 className="mb-2 text-lg font-semibold">Size</h3>
				<RadioGroup
					value={selectedSize ?? ""}
					onValueChange={handleSizeChange}
					className="flex space-x-2"
				>
					{uniqueSizes.map((size) => (
						<div key={size._id}>
							<RadioGroupItem
								value={size.size}
								id={`size-${size._id}`}
								className="sr-only peer"
							/>
							<Label
								htmlFor={`size-${size._id}`}
								className={cn(
									"flex items-center justify-center w-10 h-10 bg-white border-2 border-gray-200 rounded-md cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-50",
									{
										"border-2 border-blue-500": selectedSize === size.size,
									}
								)}
							>
								{size.size}
							</Label>
						</div>
					))}
				</RadioGroup>
			</div>

			<div>
				<h3 className="mb-2 text-lg font-semibold">Color</h3>
				<RadioGroup
					value={selectedColor ?? ""}
					onValueChange={handleColorChange}
					className="flex space-x-2"
				>
					{availableColors.map((color) => (
						<div key={color._id}>
							<RadioGroupItem
								value={color._id}
								id={`color-${color._id}`}
								className="sr-only peer"
							/>
							<Label
								htmlFor={`color-${color._id}`}
								className={cn(
									"flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-200 rounded-full cursor-pointer peer-checked:border-blue-500",
									{
										"border-2 border-blue-500": selectedColor === color._id,
									}
								)}
								style={{ backgroundColor: color.color }}
							>
								<span className="sr-only">{color.color}</span>
							</Label>
						</div>
					))}
				</RadioGroup>
			</div>

			{selectedVariant && (
				<div className="mt-4">
					<h3 className="text-lg font-semibold">Selected Variant</h3>
					<p>Size: {selectedVariant.size}</p>
					<p>Color: {selectedVariant.color}</p>
					<p>Quantity: {selectedVariant.quantity}</p>

					<div>
						<h4 className="mb-2 text-sm font-medium">Quantity</h4>
						<div className="flex items-center space-x-2">
							<Button
								variant="outline"
								size="icon"
								onClick={() => handleQuantityChange(quantity - 1)}
								disabled={quantity <= 1}
							>
								<Minus className="h-4 w-4" />
							</Button>
							<Input
								type="number"
								value={quantity}
								onChange={(e) =>
									handleQuantityChange(parseInt(e.target.value, 10))
								}
								className="w-16 text-center"
								min={1}
								max={selectedVariant.quantity}
							/>
							<Button
								variant="outline"
								size="icon"
								onClick={() => handleQuantityChange(quantity + 1)}
								disabled={quantity >= selectedVariant.quantity}
							>
								<Plus className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductSize;
