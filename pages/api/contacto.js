// // GMAIL

import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, cedula, telefono, email, banco, referencia} = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.SMTP_USER}`,
      pass: `${process.env.SMTP_PASSWORD}`
    }
  });


  // unifiedusoporte@gmail.com
  try {
    await transporter.sendMail({
      from: email,
      to: "financialiuris.eventos@gmail.com",
      subject: `ESTUDIANTE  ${name}`,
      html: `<table style="background-color:#ffa754; padding: 10px 20px; width: 60%; margin: auto; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
      <tr>
        <td style="text-align: center;">
          <h1>Tienes un mensaje de</h1>
          <p style="font-size:24px;"><strong>${name}:</strong></p>
        </td>
      </tr>
      <tr>
        <td style="text-align: center;">
          <h4>DATOS DEL ESTUDIANTE:</h4>
          <p><strong>Nombre completo:</strong> ${name}</p>
          <p><strong>Cedula o Rif:</strong> ${cedula}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>banco:</strong> ${banco}</p>
          <p><strong>referencia:</strong> ${referencia}</p>
        </td>
      </tr>
    </table>     
      `
    });
    return res.status(200).json({ message: 'tu mensaje fue enviado con exito' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }

}