import { Column } from '../../../src/decorator/columns/Column';
import { PrimaryGeneratedColumn } from '../../../src/decorator/columns/PrimaryGeneratedColumn';
import { Entity } from '../../../src/decorator/entity/Entity';

@Entity('app_test_group_app_relation')
export class AppTestGroupAppRelationEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键',
    unsigned: true,
  })
  id: number;

  @Column('int', { name: 'app_test_group_id', comment: '应用测试分组id' })
  appTestGroupId: number;

  @Column('int', { name: 'app_id', comment: '应用id' })
  appId: number;

  @Column('int', { name: 'app_package_id', comment: '应用升级包id' })
  appPackageId: number;

  @Column('tinyint', {
    name: 'is_delete',
    comment: '是否删除，1：已删除；0：未删除',
    width: 1,
  })
  isDelete: boolean;

  @Column('datetime', {
    name: 'create_time',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @Column('bigint', { name: 'create_user_id', comment: '创建者id' })
  createUserId: number;

  @Column('varchar', {
    name: 'create_user_name',
    comment: '创建者名称',
    length: 32,
  })
  createUserName: string;

  @Column('datetime', {
    name: 'update_time',
    comment: '修改时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateTime: Date;

  @Column('bigint', { name: 'update_user_id', comment: '修改者id' })
  updateUserId: number;

  @Column('varchar', {
    name: 'update_user_name',
    comment: '修改者名称',
    length: 32,
  })
  updateUserName: string;
}
