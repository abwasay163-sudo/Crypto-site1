import React from "react"
import { motion } from "motion/react"
import { Check, X } from "lucide-react"
import { Button } from "./button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./card"
import { cn } from "@/lib/utils"

export const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  highlighted = false,
  cta = "Get started",
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className={cn(
        "h-full flex flex-col transition-all duration-300",
        highlighted 
          ? "border-primary/50 bg-primary/5 ring-1 ring-primary/20 shadow-[0_0_20px_rgba(113,53,217,0.2)] hover:shadow-[0_0_30px_rgba(113,53,217,0.3)]" 
          : "hover:border-white/20 hover:bg-white/5 shadow-none hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
      )}>
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-outfit uppercase tracking-widest text-muted-foreground mb-2">
            {title}
          </CardTitle>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold font-outfit">{price}</span>
            {typeof price === 'number' && <span className="text-muted-foreground">/mo</span>}
          </div>
          <p className="text-sm text-muted-foreground mt-4">{description}</p>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm">
                {feature.included ? (
                  <Check className="w-4 h-4 text-primary" />
                ) : (
                  <X className="w-4 h-4 text-muted-foreground/50" />
                )}
                <span className={feature.included ? "text-foreground" : "text-muted-foreground/70"}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter>
          <Button 
            variant={highlighted ? "default" : "outline"} 
            className="w-full h-12 text-base"
          >
            {cta}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
