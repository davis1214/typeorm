import "reflect-metadata"
import { createConnection, DataSourceOptions } from "../../src/index"
import { AppInfoEntity } from "./entity/app.info.entity"
import { AppTestGroupAppRelationEntity } from "./entity/app.test.group.app.relation.entity"
import { AppTestGroupEntity } from "./entity/app.test.group.entity"
const options: DataSourceOptions = {
    type: "mysql",
    host: "testdb57-mysql-test.chj.cloud",
    port: 37001,
    username: "ota_app_market_rw",
    password: "Dgpk0YPoNsa3SmzD",
    database: "ota_app_market",
    logging: ["query", "error"],
    synchronize: false,
    entities: [
        AppTestGroupAppRelationEntity,
        AppTestGroupEntity,
        AppInfoEntity,
    ],
}

createConnection(options).then(
    (connection) => {
        const pageNo = 1
        const pageSize = 5

        const queryBuilder = connection
            .getRepository(AppTestGroupEntity)
            .createQueryBuilder("a")
        queryBuilder
            .leftJoinAndSelect(
                AppTestGroupAppRelationEntity,
                "b",
                "a.id = b.app_test_group_id",
            )
            .leftJoinAndSelect(AppInfoEntity, "c", "b.app_id = c.id")
            .andWhere("a.is_delete = 0")
            .andWhere("b.is_delete = 0")
            .andWhere("c.is_delete = 0")

        queryBuilder.andWhere("a.veh_system_id =:vehSystemId", {
            vehSystemId: 1,
        })


        queryBuilder
            .orderBy("a.create_time", "DESC")
            // .orderBy("a.createTime", "DESC", "NULLS FIRST")
            .skip((pageNo - 1) * pageSize)
            .take(pageSize)
            .printSql()
            .getMany()
            .then((appTestGroups) => {
                for (const appTestGroup of appTestGroups) {
                    console.log("appTestGroup ", appTestGroup)
                }
            })

        // Promise.all<any>([
        //     authorRepository.save(author),
        //     categoryRepository.save(category1),
        //     categoryRepository.save(category2),
        // ])
        //     .then(() => {
        //         return postRepository.save(post)
        //     })
        //     .then(() => {
        //         console.log("Everything has been saved.")
        //     })
        //     .then(() => {
        //         return postRepository
        //             .createQueryBuilder("post")
        //             .leftJoinAndMapMany(
        //                 "post.superCategories",
        //                 "post.categories",
        //                 "categories",
        //             )
        //             .leftJoinAndMapOne(
        //                 "post.author",
        //                 Author,
        //                 "author",
        //                 "author.id=post.authorId",
        //             )
        //             .getMany()
        //     })
    },
    (error) => console.log("Cannot connect: ", error),
)
