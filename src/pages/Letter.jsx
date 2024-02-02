import React, { useState } from "react";
import { Col, Container, Row, Form, Stack, Button } from "react-bootstrap";
import styles from "../css/Letter.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Letter = () => {
  const url = "http://localhost:3000";
  // const [startDate, setStartDate] = useState(new Date());

  const [post, setPost] = useState({
    email: "",
    date: new Date(),
    message: "",
  });

  const handleDateSelect = (date) => {
    setPost({
      ...post,
      date: date,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //get token
      // const token = document.cookie
      //   .split("; ")
      //   .find((row) => row.startsWith("access_token="))
      //   ?.split("=")[1];

      // console.log("token from clinet", token);
      // if (!token) {
      //   console.error("Authentication token is missing).");
      // }

      const res = await axios.post(`${url}/letter/posts`, post);

      if (response.status === 201) {
        alert("Letter post submitted successfully!");
      } else {
        alert("Failed to submit letter post.");
      }

      if (res) {
        setPost({
          email: "",
          date: new Date(),
          message: "",
        });
        alert("successully post");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className={`${styles.container}`}>
      <h1 className={`${styles.title}`}>A Letter to Your Future Self</h1>
      <div className={`${styles.formContainer}`}>
        <Form>
          <Stack>
            <Row>
              <Col className="flex flex-row">
                <Form.Group>
                  <Form.Label className={`${styles.label} w-28 mt-2`}>
                    Send To:
                  </Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    value={post.email}
                    name="email"
                    placeholder="youremail@gmail.com"
                    style={{ background: "#f6f1ee" }}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={`${styles.label} mr-5`}>
                    Date:
                  </Form.Label>
                  <div>
                    <DatePicker
                      closeOnScroll={true}
                      selected={post.date}
                      name="date"
                      onChange={handleDateSelect}
                      className={`${styles.datePickerContainer}`}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <br />
            <Row>
              <Form.Group>
                <Form.Label className={`${styles.label}`}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={15}
                  value={post.message}
                  name="message"
                  onChange={handleChange}
                  style={{ background: "#f6f1ee" }}
                ></Form.Control>
              </Form.Group>
            </Row>
          </Stack>
          <Stack
            direction="horizontal"
            gap={3}
            className="justify-content-end mt-4"
          >
            <Button type="button" className={`${styles.cancelBtn}`}>
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit}
              className={`${styles.sendBtn}`}
            >
              Send to the Future
            </Button>
          </Stack>
        </Form>
      </div>
    </Container>
  );
};

export default Letter;
