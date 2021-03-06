import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";
import { useRouter } from "next/router";
import appConfig from "../config.json";

function Title(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <h1>{props.children}</h1>
      <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.primary["700"]};
                    font-size 24px

                }
            `}</style>
    </>
  );
}
//function HomePage() {
//return (
//<div>
//<GlobalStyle></GlobalStyle>
//<Title tag="h1">Seja Bem-vindo ao DevCord</Title>
//<h2>A plataforma de bate papo DEV!</h2>
//</div>
//);
//}

//export default HomePage;

export default function PaginaInicial() {
  //const username = "abraao-pereira";
    const [username, setUsername] = React.useState('abraao-pereira');
    const roteamento = useRouter();
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.neutrals[500],
          backgroundImage:
            "url(https://image.freepik.com/vetores-gratis/fundo-de-luxo-de-ouro_52683-43998.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[500],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function(infosDoEvento) {
              infosDoEvento.preventDefault();
              roteamento.push("/chat");
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Title tag="h1">Seja bem-vindo ao DevCord!</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.primary[500],
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
            value={username}
            onChange={function (event) {
              console.log('usuario digitou', event.target.value);
              // Onde ta o valor?
              const valor = event.target.value;
              // Trocar o valor da variavel
              // através do React e avise quem precisa
              setUsername(valor);
            }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.primary[500],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["700"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[800],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
            }}
          >
            <Image
              styleSheet={{
                border: "2px solid",
                borderColor: appConfig.theme.colors.primary[900],
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                fontSize: "20px",
                color: appConfig.theme.colors.primary[500],
                backgroundColor: appConfig.theme.colors.neutrals[800],
                padding: "8px 10px",
                borderRadius: "500px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
