import { Request, Response, text } from 'express';

class IndexController {

    public index (req: Request, res: Response) {
        res.json({text: 'Api en /api/games'});
    }

}

export const indexController = new IndexController();