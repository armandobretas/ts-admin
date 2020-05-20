import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { UserOutlined, LockOutlined, GithubOutlined } from "@ant-design/icons";
import api from "../../services/api";
import "./styles.css";

interface FormLogin {
  email?: string;
  password?: string;
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(form: FormLogin) {
    setLoading(true);

    setTimeout(() => {
      history.push("/admin");
    }, 2000);

    // try {
    //   const response = await api.post("/login", {
    //     email: form.email,
    //     senha: form.password,
    //   });
    //   console.log(response.data)
    //   return response.data;
    // } catch (e) {
    //   setTimeout(() => {
    //     setLoading(false);
    //     notification.info({
    //       message: "Atenção",
    //       description: "Usuário não encontrado",
    //     });
    //   }, 3000);
    // }
  }

  return (
    <div className="container">
      <div className="login">
        <Form onFinish={handleSubmit}>
          <Form.Item className="center">
            <img src={logoImg} alt="Logo" width={40} />
            <span className="title"> TS Admin</span>
          </Form.Item>
          <Form.Item
            name="email"
            initialValue="admin@admin.com"
            rules={[
              {
                required: true,
                message: "Favor digite seu e-mail!",
                type: "email",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="email"
              placeholder="Digite seu e-mail"
            />
          </Form.Item>
          <Form.Item
            name="password"
            initialValue="admin"
            rules={[{ required: true, message: "Favor digite sua senha!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Digite sua senha"
            />
          </Form.Item>
          <Form.Item>
            <Button loading={loading} htmlType="submit" type="primary">
              Entrar
            </Button>
          </Form.Item>
          <Link to="/senha">Esqueci minha senha</Link>
        </Form>
      </div>
      <footer>
        <p>
          <span
            onClick={() =>
              window.open("https://github.com/armandobretas", "_blank")
            }
          >
            <GithubOutlined size={22} color="#41414d" />
          </span>
        </p>
        <p>
          <span> &copy; 2020 TS Admin - Desenvolvido por Armando Neto</span>
        </p>
      </footer>
    </div>
  );
};

export default Login;
