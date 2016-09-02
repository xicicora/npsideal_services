/**
 * Created by Sharon.Xi on 9/1/2016.
 */

module DAO {
    import Identifiable = Model.Identifiable;
    export interface DAO<T extends Identifiable> {
        create(t: T): T;
        read(id: number): T;
        update(t: T): boolean;
        delete(id: number): boolean;
    }
}