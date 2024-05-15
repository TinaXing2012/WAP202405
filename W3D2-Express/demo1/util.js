// we're going to populate req.body with POST body data
module.exports.urlencoded = () => (req, res, next) => {
    if(req.method === 'POST'){
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            const keypairs = body.split('&');
            req.body = {};
            keypairs.forEach(keypair => {
                const [key, value] = keypair.split('=');
                req.body[key] = value;
            });
            return next();
        })
    } else {
       return next();
    }
    
}