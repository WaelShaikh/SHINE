import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

interface SortPanelProps {
  value: string
  onChange: (value: string) => void
}

const sortOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "trending", label: "Trending" },
  { value: "latest", label: "Latest arrivals" },
  { value: "price-low-high", label: "Price: Low to high" },
  { value: "price-high-low", label: "Price: High to low" },
]

export function SortPanel({ value, onChange }: SortPanelProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Sort by</h2>
      </div>
      <Separator className="md:hidden" />

      <Separator className="hidden md:block" />
      
      <RadioGroup value={value} onValueChange={onChange} className="space-y-3">
        {sortOptions.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label className="text-sm" htmlFor={option.value}>
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

