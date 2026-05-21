import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(2).max(120),
});

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  assetTitle: string;
  ctaLabel?: string;
}

export function LeadMagnetModal({ open, onOpenChange, assetTitle, ctaLabel = "Receber material" }: Props) {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error("Verifique os campos preenchidos");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast.success("Pronto! Enviamos o material para o seu e-mail.");
    }, 600);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{assetTitle}</DialogTitle>
          <DialogDescription>Preencha os dados para receber o material por e-mail.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="lm-name">Nome</Label>
            <Input id="lm-name" name="name" required maxLength={100} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lm-email">E-mail corporativo</Label>
            <Input id="lm-email" name="email" type="email" required maxLength={255} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lm-company">Empresa</Label>
            <Input id="lm-company" name="company" required maxLength={120} />
          </div>
          <Button type="submit" size="lg" disabled={loading} className="bg-accent text-accent-foreground hover:bg-accent/90">
            {loading ? "Enviando..." : ctaLabel}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}