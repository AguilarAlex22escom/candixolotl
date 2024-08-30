import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Input from "@/Components/Input/Input";
import CheckoutData from "@/Interfaces/CheckoutData.d";
import Button from "@/Components/Button/Button";
import CartItem from "@/Interfaces/CartItem";

const Checkout: FC = () => {
  const { control, register, handleSubmit, reset, setValue } =
    useForm<CheckoutData>();
  const products: CartItem[] = JSON.parse(localStorage.getItem("cart_items")!);
  let productsToMessage: string[] = [];

  products.forEach((product) => {
    productsToMessage.push(
      `- ${product.name} marca ${product.brand} - ${product.amount} unidades.`
    );
  });

  useEffect(() => {
    if (products) {
      setValue("products", JSON.stringify(productsToMessage));
    }
  }, [products, setValue]);

  const onSubmit: SubmitHandler<CheckoutData> = (data: CheckoutData) => {
    console.log(data);
    const phoneNumber = "5617295898"; // Reemplaza con el número de WhatsApp al que quieres enviar el mensaje
    const message = `${data.first_name} ${data.last_name} Ha pedido los siguientes productos: ${data.products}
                              Se encuentra por ${data.place}`;

    // Construye la URL de WhatsApp

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`;

    // Abre la URL en una nueva ventana
    window.open(whatsappUrl, "_blank");

    // Resetea el formulario después de enviarlo
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        inputType="text"
        inputClass="Sale"
        inputUIMode="Light"
        inputLabel="Nombre(s)"
        name="first_name"
        control={control}
      />
      <Input
        inputType="text"
        inputClass="Sale"
        inputUIMode="Light"
        inputLabel="Apellidos"
        name="last_name"
        control={control}
      />
      <TextField
        placeholder="Lugar donde te encuentras en la ESCOM"
        multiline
        rows={3}
        maxRows={5}
        {...register("place")}
      />
      <TextField
        placeholder="Productos"
        disabled
        multiline
        defaultValue={productsToMessage.toString}
        {...register("products")}
      />
      <Button type="submit">Enviar a WhatsApp</Button>
    </form>
  );
};

export default Checkout;
