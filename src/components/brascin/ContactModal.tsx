import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  company: z.string().trim().min(2, "Informe a empresa").max(120),
  phone: z.string().trim().min(8, "Telefone inválido").max(30),
  message: z.string().trim().max(1000).optional(),
});

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  title?: string;
  description?: string;
}

export function ContactModal({ open, onOpenChange, title = "Falar com Especialista", description = "Conte sobre sua operação. Um especialista da Brascin retornará em até 1 dia útil." }: Props) {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Verifique os campos");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast.success("Recebemos sua mensagem. Em breve entraremos em contato.");
    }, 600);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" name="name" required maxLength={100} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">E-mail corporativo</Label>
            <Input id="email" name="email" type="email" required maxLength={255} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="company">Empresa</Label>
              <Input id="company" name="company" required maxLength={120} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" name="phone" required maxLength={30} />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Mensagem (opcional)</Label>
            <Textarea id="message" name="message" maxLength={1000} rows={3} />
          </div>
          <Button type="submit" size="lg" disabled={loading} className="bg-accent text-accent-foreground hover:bg-accent/90">
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}