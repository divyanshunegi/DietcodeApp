import * as api from '../utils/api';
import RealmDatabse from '../database/RealmDatabase';

let userName = RealmDatabse.findUser()[0];

console.log(userName?userName.serverId:"user does not exist");

export async function createUser(slackId, firstName, deviceToken, profileImage,email) {
    let userobj = {
        "slackId": slackId,
        "email": email,
        "firstName": firstName,
        "deviceToken": deviceToken,
        "profileImage": profileImage
    };
    try {
      const resp = await api.post("https://dc-office.herokuapp.com/api/v1/users", userobj, true);
      return resp;
    }
    catch (error) {
        throw error;
    }
}

export async function checkinUser() {

    let timelineObj = {
        user: userName.serverId,
        description: userName.name+" checked in successfully",
        type: "checkin"
    };
    try {
        const resp = await api.post("https://dc-office.herokuapp.com/api/v1/timelines", timelineObj, true);
        return resp;
    }
    catch (error) {
        throw error;
    }
}

export async function checkoutUser() {

    let timelineObj = {
        user: userName.serverId,
        description: userName.name+" checked out successfully",
        type: "checkout"
    };
    try {
        const resp = await api.post("https://dc-office.herokuapp.com/api/v1/timelines", timelineObj, true);
        return resp;
    }
    catch (error) {
        throw error;
    }
}

export async function getLastCheckinCheckout(type) {

    try {
        const resp = await api.get("https://dc-office.herokuapp.com/api/v1/timelines?type="+type+"&user="+userName.serverId+"&limit=1&sort=createdAt DESC", true);
        return resp;
    }
    catch (error) {
        throw error;
    }
}

export async function getUserTimeline(page) {
    try {
        const resp = await api.get("https://dc-office.herokuapp.com/api/v1/timelines?user="+userName.serverId+"&limit=10&skip="+page, true);
        return resp;
    }
    catch (error) {
        throw error;
    }
}