var environments = {};

environments.staging = {
    'port': 3000,
    'host': 'http://localhost:3000/api/v1/',
    'secret': 'remilekun_1997',
    'application_name': 'Yowamusic',
    'db': 'postgres://postgres:easyfood@localhost:5432/easyfood',
    'sendgrid_api_key': 'Bearer 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',
    'sendgrid_username': 'myapp',
    'sendgrid_from': 'no-reply@easyfood.ng',
    'twilio_account_sid': '',
    'twilio_auth_token': '',
    'twilio_messaging_service_sid': '',
    'aws_access_key_id': 'AKIATQYSF5TU6FHW7BXG',
    'aws_secret_key': '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',
    'aws_bucket_fname': 'easyfood',
    'platformEncryptionKey': 'ZPUyxiyqGiYyXutHJfG3jTrpnDsh0XqK',

    'database_user': 'postgres',
    'database_host': 'localhost',
    'database': 'yowamusic',
    'database_password': '12345',
    'database_port': 5432,

    "cloudinary_apiKey": "467886654622314",
    'cloudinary_api_secret': 'CSTLasPM7kL5c2JQuoplitK65xI',
    'cloudinary_cloud_name': 'remilekunelijah',

    "mongodb_uri": "mongodb://remi:09023007389@bridal-shard-00-00.i1rsb.mongodb.net:27017,bridal-shard-00-01.i1rsb.mongodb.net:27017,bridal-shard-00-02.i1rsb.mongodb.net:27017/bridalkandil?ssl=true&replicaSet=atlas-3fipcz-shard-0&authSource=admin&retryWrites=true&w=majority",
};

environments.production = {
    'port': process.env.port,
    'host': process.env.host,
    'secret': process.env.secret,
    'application_name': process.env.application_name,

    'database_user': 'ewmrhumr_remilekunelijah',
    'database_host': 'localhost',
    'database': 'ewmrhumr_users',
    'database_password': '09023007389@fb.com',
    'database_port': 5432,


    'db': process.env.db,
    'sendgrid_api_key': process.env.sendgrid_api_key,
    'sendgrid_username': process.env.username,
    'sendgrid_from': process.env.sendgrid_from,
    'twilio_account_sid': process.env.twilio_account_sid,
    'twilio_auth_token': process.env.twilio_account_sid,
    'twilio_messaging_service_sid': process.env.twilio_messaging_service_sid,
    'aws_access_key_id': process.env.aws_access_key_id,
    'aws_secret_key': process.env.aws_secret_key,
    'aws_bucket_fname': process.env.aws_bucket_fname,
    'platformEncryptionKey': process.env.platformEncryptionKey
};



module.exports = process.env.NODE_ENV === 'production' ? environments.production : environments.staging;