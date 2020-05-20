import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import api from "../../services/api";
import "./styles.css";

interface FormPassword {
  email?: string;
}

const Password: React.FC = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(form: FormPassword) {
    setLoading(true);
    try {
      const response = await api.post("/recuperar_senha", {
        email: form.email,
      });

      setTimeout(() => {
        setLoading(false);
      }, 2000);
      return response.data;
    } catch (e) {
      setTimeout(() => {
        setLoading(false);
        notification.info({
          message: "Atenção",
          description: "Usuário não encontrado",
        });
      }, 3000);
    }
  }

  return (
    <div className="container">
      <div className="password">
        <Form onFinish={handleSubmit}>
          <Form.Item className="center">
            <img src={logoImg} alt="Logo" width={40} />
            <span className="title"> TS Admin</span>
          </Form.Item>
          <Form.Item
            name="email" 
            rules={[
              {
                required: true,
                message: "Favor preencher o e-mail",
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
        
          <Form.Item>
            <Button loading={loading} htmlType="submit">
              Enviar código de verificação
            </Button>
          </Form.Item>
          <Link to="/">Voltar</Link>
        </Form>
      </div>
      <footer>
        <span> &copy; 2020 TS Admin - Desenvolvido por Armando Neto</span>
      </footer>
    </div>
  );
};

export default Password;
