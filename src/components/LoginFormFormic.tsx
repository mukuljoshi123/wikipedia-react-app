import styled from "styled-components";
import Card from "./UI/Card";
import AppIcon from "../assets/images/app-icon.png";
import { FormikProps, Form, Field, withFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
	username: string;
	password: string;
}

interface OtherProps {
	message?: string;
}

interface MyFormProps {
	initialUsername?: string;
	initialPassword?: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
	const { touched, errors, isSubmitting, message } = props;
	return (
		<Form>
			<Field type="username" name="username" />
			{touched.username && errors.username && <div>{errors.username}</div>}

			<Field type="password" name="password" />
			{touched.password && errors.password && <div>{errors.password}</div>}

			<button type="submit" disabled={isSubmitting}>
				Submit
			</button>
		</Form>
	);
};

const LoginForms = withFormik<MyFormProps, FormValues>({
	mapPropsToValues: (props) => {
		return {
			username: props.initialUsername || "",
			password: "",
		};
	},

	validationSchema: Yup.object().shape({
		username: Yup.string().required("username is required"),
		password: Yup.string().required("Password is required"),
	}),
	handleSubmit: (values) => {
		// do submitting things
	},
})(InnerForm);

const LoginForm = () => {
	const initialValues: FormValues = { username: "", password: "" };
	return (
		<div>
			<Card width="50%">
				<HeaderImage src={AppIcon} alt="app-icon" />
				<h3>Login</h3>
				<LoginForms />
			</Card>
		</div>
	);
};

const HeaderImage = styled.img`
	width: 30px;
	padding: 5px 20px;
`;

export default LoginForm;
