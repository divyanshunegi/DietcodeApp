class UserModel {
    constructor(name,email, accessToken,company,id,image_link,serverId,role) {
        this.name = name;
        this.email = email;
        this.access_token = accessToken;
        this.company = company;
        this.id = id;
        this.image_link = image_link;
        this.serverId = serverId;
        this.role = role;
    }
}

module.exports = UserModel;