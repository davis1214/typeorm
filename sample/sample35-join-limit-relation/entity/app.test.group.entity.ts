import { Column } from "../../../src/decorator/columns/Column"
import { PrimaryGeneratedColumn } from "../../../src/decorator/columns/PrimaryGeneratedColumn"
import { Entity } from "../../../src/decorator/entity/Entity"

@Entity("app_test_group", { schema: "ota_app_market" })
export class AppTestGroupEntity {
    @PrimaryGeneratedColumn({
        type: "int",
        name: "id",
        comment: "主键",
        unsigned: true,
    })
    id: number

    @Column("varchar", { name: "name", comment: "分组名称", length: 64 })
    name: string

    @Column("int", {
        name: "type",
        comment: "分组类型，1：普通分组；2：A/B Test",
        unsigned: true,
        default: () => "1",
    })
    type: number

    @Column("int", { name: "veh_system_id", comment: "系统id" })
    vehSystemId: number

    @Column("varchar", { name: "description", comment: "描述", length: 256 })
    description: string

    @Column("datetime", { name: "start_time", comment: "开始时间" })
    startTime: Date

    @Column("datetime", { name: "end_time", comment: "结束时间" })
    endTime: Date

    @Column("int", {
        name: "status",
        comment: "状态，0:未启用, 1:启用",
        unsigned: true,
        default: () => "0",
    })
    status: number

    @Column("tinyint", {
        name: "is_delete",
        comment: "是否删除，1：已删除；0：未删除",
        width: 1,
    })
    isDelete: boolean

    @Column("datetime", {
        name: "create_time",
        comment: "创建时间",
        default: () => "CURRENT_TIMESTAMP",
    })
    createTime: Date

    @Column("bigint", { name: "create_user_id", comment: "创建者id" })
    createUserId: number

    @Column("varchar", {
        name: "create_user_name",
        comment: "创建者名称",
        length: 32,
    })
    createUserName: string

    @Column("datetime", {
        name: "update_time",
        comment: "修改时间",
        default: () => "CURRENT_TIMESTAMP",
    })
    updateTime: Date

    @Column("bigint", { name: "update_user_id", comment: "修改者id" })
    updateUserId: number

    @Column("varchar", {
        name: "update_user_name",
        comment: "修改者名称 ",
        length: 32,
    })
    updateUserName: string
}
