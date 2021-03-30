import service from "../utils/request";

export function SaveAdmin(data) {
    return service({
        url: '/admin',
        method: 'post',
        data: data
    })
}

export function AdminSendEmail(email) {
    return service({
        url: '/admin/sendEmail?email=' + email,
        method: 'get'
    })
}

export function AdminLogin(type, data) {
    return service({
        url: '/admin/login?type=' + type,
        method: 'post',
        data: data
    })
}