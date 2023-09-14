// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelsController {

    protected users = [{
        id: 1,
        slug: 'dd',
        name: 'Eduardo Pontes'
    },
    {
        id: 2,
        slug: 'lulu',
        name: 'Luana Prado'
    }]

    async index ({request}){
        request.qs();
        return {response: 'Index do Painel', qs: request.qs()};
    }

    async usuarioById({params}){
        if(!params['id']){
            return {users: this.users}
        }
            let myRequestUserId = params['id'];
            let myUser = this.users.find(user => user.id == myRequestUserId);

            if(myUser){
            return myUser;
            }else{
                return {error: 'nenhum usuario encontrado'};
            }
        
        
    }
    async usuarioBySlug({params}){
        let myRequestUserSlug = params['slug'];
        let myUser = this.users.find(user => user.slug == myRequestUserSlug);

        if(myUser){
        return myUser;
        }else{
            return {error: 'nenhum usuario encontrado'};
        }
    }

    async docs({params}){
        return params['*'][4];
    }

}
