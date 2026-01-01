"use client";

import React from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Typography,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

// 🔑 अपना WhatsApp नंबर डालो (country code के साथ, बिना +)
const WHATSAPP_NUMBER = "919999999999";

export default function ContactSection() {

  const onFinish = (values: any) => {
    const { name, phone, email, subject, message } = values;

    const whatsappMessage = `
    Name: ${name}
    Phone: ${phone}
    Email: ${email}
    Subject: ${subject || "N/A"}

    Message:
    ${message}
        `;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 20px",
        background: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 60 }}>
          Get In Touch
        </Title>

        <Row gutter={[48, 48]} align="middle">
          {/* LEFT CONTENT */}
          <Col xs={24} md={12}>
            <Title level={3} style={{ color: "var(--heading)" }}>
              Let’s build something great together
            </Title>

            <Paragraph
              style={{
                color: "var(--text)",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              I’m a full-stack web developer specializing in modern, scalable,
              and high-performance web applications using React, Next.js,
              Node.js, and databases.
            </Paragraph>

            <Paragraph style={{ color: "var(--text)", marginTop: 24,  }}>
              <MailOutlined style={{ color: "var(--text)", marginBottom: 14,  }} /> &nbsp; sonupaswan0381@gmail.com
              <br />
              <PhoneOutlined /> &nbsp; +91 94302 66995
            </Paragraph>
          </Col>

          {/* RIGHT FORM */}
          <Col
            xs={24}
            md={12}
            style={{
              background: "var(--container)",
              padding: "40px 30px",
              borderRadius: 16,
              border: "1px solid var(--border)",
            }}
          >
            <Title level={4} style={{ color: "var(--heading)", marginBottom: 24 }}>
              Contact Me
            </Title>

            <Form layout="vertical" onFinish={onFinish}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please enter your name" }]}
                    
                  >
                    <Input placeholder="Your name" 
                    style={{
                      padding:10
                    }} 
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: "Please enter phone number" }]}
                  >
                    <Input placeholder="Phone number" 
                    style={{
                      padding:10
                    }} 
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email address" },
                ]}
              >
                <Input placeholder="Your email" 
                style={{
                      padding:10
                    }} 
                 />
              </Form.Item>

              <Form.Item label="Subject" name="subject">
                <Input placeholder="Project discussion / Inquiry" style={{
                      padding:10
                    }}   />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: "Please write your message" }]}
              >
                <TextArea rows={6} placeholder="Write your message..." />
              </Form.Item>

              <Button type="primary" size="large" block htmlType="submit">
                Send on WhatsApp
              </Button>
            </Form>
          </Col>
        </Row>

        {/* SOCIAL ICONS */}
        {/* <div
          style={{
            marginTop: 64,
            textAlign: "center",
            fontSize: 24,
          }}
        >
          <a href="#" style={{ margin: "0 14px", color: "var(--text)" }}>
            <GithubOutlined />
          </a>
          <a href="#" style={{ margin: "0 14px", color: "var(--text)" }}>
            <LinkedinOutlined />
          </a>
          <a href="#" style={{ margin: "0 14px", color: "var(--text)" }}>
            <TwitterOutlined />
          </a>
        </div> */}
      </div>
    </section>
  );
}
