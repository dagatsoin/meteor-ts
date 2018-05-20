import {
  action,
  computed,
  observable,
  toJS
} from 'mobx';

export class Entity {

  @observable protected _hasChanged: boolean;

  @computed
  get hasChanged(): boolean {
    return this._hasChanged;
  }

  get type(): string {
    return this._type;
  }

  get updatedAt(): number {
    return this._updatedAt;
  }

  get createdAt(): number {
    return this._createdAt;
  }

  get name(): string {
    return this._name;
  }

  get shortDesc(): string {
    return this._shortDesc;
  }

  get desc(): string {
    return this._desc;
  }

  get icon(): string {
    return this._icon;
  }

  get image(): string {
    return this._image;
  }

  get aura(): number {
    return this._aura;
  }

  get phase(): number {
    return this._phase;
  }

  get id(): string {
    return this._id;
  }

  get categories(): string[] {
    return this._categories;
  }

  get active(): boolean {
    return this._active;
  }

  get intro(): string {
    return this._intro;
  }

  get touristicInfo(): string {
    return this._touristicInfo;
  }

  protected _prefabId: string = "";
  protected _type: string = "";
  protected _categories: string[] = [];
  protected _id: string = "";
  protected _active: boolean = false;
  protected _name: string = "";
  protected _aura: number = 0;
  protected _phase: number = 0;
  protected _icon: string = "";
  protected _image: string = "";
  protected _shortDesc: string = "";
  protected _desc: string = "";
  protected _touristicInfo: string = "";
  protected _intro: string = "";
  protected _createdAt: number = 0;
  protected _updatedAt: number = 0;

  @computed
  protected get entityViewModel(): any {
    return {
      // Instance
      _id: this._id,
      active: this.active,
      categories: this.categories,
      createdAt: this.createdAt,
      prefabId: this._prefabId,
      updatedAt: this.updatedAt,

      // Entity
      aura: this.aura,
      desc: this.desc,
      dialogs: [],
      endQuests: [],
      icon: this.icon,
      image: this.image,
      intro: this.intro,
      name: this.name,
      phase: this.phase,
      questObjectives: [],
      shortDesc: this.shortDesc,
      touristicInfo: this.touristicInfo,
      type: "Entity",
    };
  }

  constructor(_id: string) {
    this._id = _id;
  }

  public serialize(): any {

    return toJS({
      // Instance
      _id: this._id,
      active: this.active,
      categories: this.categories,
      createdAt: this.createdAt,
      prefabId: this._prefabId,
      updatedAt: this.updatedAt,

      // Entity
      aura: this.aura,
      desc: this.desc,
      icon: this.icon,
      image: this.image,
      intro: this.intro,
      name: this.name,
      phase: this.phase,
      shortDesc: this.shortDesc,
      touristicInfo: this.touristicInfo,
      type: "Entity",
    });
  }

  @action
  public hydrate(serializedEntity: any) {

    if (serializedEntity.prefabId != null) this._prefabId = serializedEntity.prefabId;
    if (serializedEntity.categories != null) this._categories = serializedEntity.categories;
    if (serializedEntity.createdAt != null) this._createdAt = serializedEntity.createdAt;
    if (serializedEntity.updatedAt != null) this._updatedAt = serializedEntity.updatedAt;
    if (serializedEntity.active != null) this._active = serializedEntity.active;

    if (serializedEntity.name != null) this._name = serializedEntity.name;
    if (serializedEntity.aura != null) this._aura = serializedEntity.aura;
    if (serializedEntity.phase != null) this._phase = serializedEntity.phase;
    if (serializedEntity.icon != null) this._icon = serializedEntity.icon;
    if (serializedEntity.image != null) this._image = serializedEntity.image;
    if (serializedEntity.shortDesc != null) this._shortDesc = serializedEntity.shortDesc;
    if (serializedEntity.desc != null) this._desc = serializedEntity.desc;
    if (serializedEntity.touristicInfo != null) this._touristicInfo = serializedEntity.touristicInfo;
    if (serializedEntity.intro != null) this._intro = serializedEntity.intro;
  }
}

export default new Entity("hh")