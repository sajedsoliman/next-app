import { emo } from "../../db";

export default (req, res) => {
	res.status(200).json(emo);
};
