import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";
import CheckoutData from "@/Interfaces/CheckoutData.d";
import CartItem from "@/Interfaces/CartItem.d";

const Checkout: FC = () => {
  const { control, handleSubmit, reset, setValue } = useForm<CheckoutData>();
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
    const message = `El compañerx ${data.first_name} ${data.last_name} ha pedido los siguientes productos: ${data.products}
                              Se encuentra por ${data.place}`;
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Input
        disabled={true}
        multiline={true}
        inputType="text"
        inputClass="Sale"
        inputUIMode="Light"
        inputLabel={productsToMessage.toString()}
        name="products"
        rows={10}
        control={control}
      />
      <Input
        inputType="text"
        inputClass="Sale"
        inputUIMode="Light"
        inputLabel="Nombre(s)"
        name="first_name"
        control={control}
        disabled={false}
      />
      <Input
        inputType="text"
        inputClass="Sale"
        inputUIMode="Light"
        inputLabel="Apellidos"
        name="last_name"
        control={control}
        disabled={false}
      />
      <Input
        inputType="text"
        inputClass="Sale"
        inputUIMode="Light"
        inputLabel="¿Dónde estás dentro de ESCOM?"
        name="address"
        multiline={true}
        rows={10}
        control={control}
        disabled={false}
      />
      <Button buttonType="WhatsApp" type="submit">
        Enviar a WhatsApp
      </Button>
    </form>
  );
};

export default Checkout;
