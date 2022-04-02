import { Column } from '../../../src/decorator/columns/Column';
import { PrimaryGeneratedColumn } from '../../../src/decorator/columns/PrimaryGeneratedColumn';
import { Entity } from '../../../src/decorator/entity/Entity';

@Entity('app_info')
export class AppInfoEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键',
    unsigned: true,
  })
  id: number;

  @Column('varchar', { name: 'package_name', comment: '应用包名', length: 128 })
  packageName: string;

  @Column('varchar', { name: 'name', comment: '应用名称', length: 32 })
  name: string;

  @Column('varchar', {
    name: 'developer_name',
    comment: '开发者名称',
    length: 64,
  })
  developerName: string;

  @Column('varchar', { name: 'title', comment: '应用标题', length: 128 })
  title: string;

  @Column('varchar', { name: 'description', comment: '应用描述', length: 256 })
  description: string;

  @Column('varchar', { name: 'icon_url', comment: '图标地址', length: 256 })
  iconUrl: string;

  @Column('varchar', { name: 'picture_url', comment: '图片地址', length: 256 })
  pictureUrl: string;

  @Column('tinyint', {
    name: 'is_visible',
    comment: '是否显示在应用商店，1：显示；0：隐藏',
    width: 1,
    default: () => "'1'",
  })
  isVisible: boolean;

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
  createUserId: string;

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
  updateUserId: string;

  @Column('varchar', {
    name: 'update_user_name',
    comment: '修改者名称',
    length: 32,
  })
  updateUserName: string;
}
