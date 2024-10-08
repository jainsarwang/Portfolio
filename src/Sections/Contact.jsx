import { useRef, useState } from "react";
import emailJS from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	emailJS.init({
		publicKey: import.meta.env.VITE_EMAILJS_PUBLICKEY,
	});

	const handleChange = ({ target: { name, value } }) => {
		setForm((prevForm) => ({
			...prevForm,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		if (form.name == "" || form.email == "" || form.message == "") {
			setLoading(false);
			return toast.error("All fields are required!!");
		}

		try {
			await emailJS.send("default_service", import.meta.env.VITE_EMAILJS_TEMPLATE, form);

			setLoading(false);
			toast.success("Your Message has been sent!");

			setForm({
				name: "",
				email: "",
				message: "",
			});
		} catch (e) {
			setLoading(false);
			toast.error("Oops, Something went wrong...");
		}
	};

	return (
		<section className="c-space my-20" id="contact">
			<div className="relative min-h-screen flex items-center justify-center flex-col">
				<img src="/assets/terminal.png" alt="terminal-bg" className="h-full absolute inset-0 min-h-screen" />

				<div className="contact-container p-10">
					<h3 className="head-text">Let&apos;s talk</h3>
					<p className="text-lg text-white-600 mt-3">
						Whether you’re looking to build a new website, improve your existing platform, or bring a unique
						project to life, I’m here to help.
					</p>

					<form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
						<label className="space-y-3">
							<span className="field-label">Full Name</span>
							<input
								type="text"
								name="name"
								value={form.name}
								required
								onChange={handleChange}
								className="field-input"
								placeholder="John Doe"
							/>
						</label>

						<label className="space-y-3">
							<span className="field-label">Email address</span>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								required
								className="field-input"
								placeholder="johndoe@example.com"
							/>
						</label>

						<label className="space-y-3">
							<span className="field-label">Your message</span>
							<textarea
								name="message"
								value={form.message}
								onChange={handleChange}
								required
								rows={5}
								className="field-input"
								placeholder="Share your thoughts or inquiries..."
							/>
						</label>

						<button className="field-btn" type="submit" disabled={loading}>
							{loading ? "Sending..." : "Send Message"}

							<img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
						</button>
					</form>
				</div>
			</div>

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				transition={Bounce}
			/>
		</section>
	);
};

export default Contact;
