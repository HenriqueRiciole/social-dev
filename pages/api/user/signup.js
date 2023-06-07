import { signupUser} from '../../../modules/user/user.service'
//teve que abrir as chaves pq não é um export default

function signup(req, res){
    signupUser()
    res.status(200).json({teste: "ok"})
}

export default signup