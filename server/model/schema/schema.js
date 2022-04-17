const userStructure = { 
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true   // 保证邮箱唯一
    },
    password: {
        type: String,
        require: true
    },
    ctime: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: "admin"    // admin | user
    },
    status: {
        type: String, 
        default: "active"    //active | inactive
    }
}
const articleStructure = {
    title: {
        type: String,
        require: true
    },
    ctime: {
        type: String,
        default: Date.now
    },
    content: {
        type: String,
        require: true
    },
    tags: {
        type: Array,
        require: true
    },
    imgPath: {
        type: String,
        require: false
    },
    folders: {
        type: Array,
        require: true
    }
}
// 文件夹 
const folderStructure = {
    folderName: {
        type: String,
        require: true,
        unique: true
    },
    ctime: {
        type: Date,
        default: Date.now
    }
}

// tag
const tagsStructure = {
    tagName: {
        type: String,
        require: true,
        unique: true
    },
    ctime: {
        type: Date,
        default: Date.now
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
}
// 评论


// 点赞
module.exports = {
    userStructure,
    articleStructure,
    folderStructure,
    tagsStructure
}