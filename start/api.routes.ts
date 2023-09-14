import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{

    Route.group(() =>{
        Route.get('/', 'PainelsController.index');

        Route.get('/usuarios/:id?', 'PainelsController.usuarioById')
        .where('id', Route.matchers.number());

        Route.get('/usuarios/:slug', 'PainelsController.usuarioBySlug')
        .where('slug', Route.matchers.slug());

        Route.get('/docs/*', 'PainelsController.docs')

    }).prefix('/painel/');

}).prefix('/api');

