export type Vec4 = [number, number, number, number];

export const SPHERE_TYPE = 0;
export const PLANE_TYPE = 1;
export const LIGHT_TYPE = 2;

export class RenderObject {
  type: number;
  position: Vec4;
  materials: Vec4;
  objectMaterialsExtended: Vec4;

  constructor(position: Vec4, materials: Vec4, objectMaterialsExtended: Vec4) {
    this.position = position;
    this.materials = materials;
    this.objectMaterialsExtended = objectMaterialsExtended;
  }
}

/**
 * 球
 */
export class Sphere extends RenderObject {
  constructor(position: Vec4, materials: Vec4, objectMaterialsExtended: Vec4) {
    super(position, materials, objectMaterialsExtended);
    this.type = SPHERE_TYPE;
  }
}

/**
 * 平面
 */
export class Plane extends RenderObject {
  objectMaterialsExtended: Vec4;
  constructor(position: Vec4, materials: Vec4, objectMaterialsExtended: Vec4) {
    super(position, materials,objectMaterialsExtended);
    this.type = PLANE_TYPE;
  }
}
