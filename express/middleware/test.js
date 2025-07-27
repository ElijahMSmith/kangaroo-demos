function checkStuff(req, res, next) {
	console.log("Request Type:", req.method);
	next();
}

const mustHaveToken = "abcdefg";

function rejectUnauthenticated(req, res, next) {
	console.log(req.headers);
	const authHeader = req.headers["authorization"];
	console.log(authHeader);
	if (authHeader !== `Bearer ${mustHaveToken}`) {
		res.status(401).json({ error: "Unauthenticated" });
		return;
	}
	next();
}

export { checkStuff, rejectUnauthenticated };
