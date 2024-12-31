import Register from "./_component/register";

const pageMetadata = {
    title: "Faça seu Registro - Crie sua Conta de Forma Rápida e Segura",
    description: "Faça seu registro de forma rápida e segura para acessar sua conta, gerenciar configurações e aproveitar todos os recursos exclusivos. Acesse agora sua conta e comece a usar nossos serviços.",
    openGraph: {
        title: "Título para Redes Sociais",
        description: "Descrição para Redes Sociais",
        url: "https://meusite.com",
        type: "website",
        locale: "pt_BR",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Descrição da Imagem",
            },
        ],
    },
};

export const metadata = {
    ...pageMetadata,
};

export default function LoginForm() {
    return (
        <Register />
    );
}
