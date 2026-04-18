export default async function handler(req, res) {
  const { input, agent } = JSON.parse(req.body);

  const name = agent || "房產顧問";

  res.status(200).json({
    p591: `【精選物件】\n${input}\n\n${name}`,
    fb: `🔥 熱門物件 🔥\n${input}\n\n${name}`,
    ig: `${input}\n#房地產\n${name}`
  });
}
