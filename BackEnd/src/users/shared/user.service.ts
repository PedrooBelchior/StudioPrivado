import { Injectable } from '@nestjs/common';
import { User, Pedido } from './user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';



@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('User') private readonly pedidoModel: Model<Pedido>
    
    ) { }

    async getAll() {
        return await this.userModel.find().exec();
    }


    async getById(id: string) {
        return await this.userModel.findById(id).exec();
    }

    async getByPeidoId(id: string) {
        return await this.pedidoModel.findById(id).exec();
    }

    async getByEmail(email: string) {
        return await this.userModel.findOne({ email: email }).exec();
    }

    async getByTipo(tipo: string) {
        return await this.userModel.findOne({ tipo: tipo }).exec();
    }


    async create(user: User) {
        const createdUser = new this.userModel(user);
        return await createdUser.save();
    }

    async update(id: string, user: User) {
        await this.userModel.updateOne({ _id: id }, user).exec()
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.userModel.deleteOne({ _id: id }).exec();
    }

    async getAllOrder() {
        return await this.userModel.aggregate([
            {
                $project:
                    { "pedido": 1 }
            }
        ])
    }
}
