import Feedback from "./Feedback.js"
import Crud from "../Crud/CrudController.js"

class FeedbackController extends Crud {
    constructor( entity ) {
        super( entity )
    }

    async search(req, res) {
        let listFeedBack = await this.entity.findAll()

        return res.json(listFeedBack.map( feedback => {
            const { dataValues } = feedback;
            const date = new Date(dataValues.createdAt)
            let day = '' + date.getDate();
            let month = '' + (date.getMonth() + 1);
            const year = date.getFullYear();

            if( day.length < 2 ) {
                day = "0" + day
            }
            if( month.length < 2 ) {
                month = "0" + month
            }


            return {
                id: dataValues.id,
                user_name: dataValues.userName,
                title: dataValues.title,
                date: [day, month, year].join('/'),
                rate: dataValues.rate,
                description: dataValues.description
            }
        }))
    }
}

const feedbackController = new FeedbackController( Feedback )

export default feedbackController