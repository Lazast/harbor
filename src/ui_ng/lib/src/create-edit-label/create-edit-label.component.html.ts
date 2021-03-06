export const CREATE_EDIT_LABEL_TEMPLATE: string = `
<div>
    <form #labelForm="ngForm" [hidden]="!formShow">
        <section>
            <label>
                <label for="name">{{'LABEL.LABEL_NAME' | translate}}</label>
                    <label  aria-haspopup="true" role="tooltip" [class.invalid]="isLabelNameExist" class="tooltip tooltip-validation tooltip-md tooltip-bottom-left">
                    <input type="text" id="name" name="name" required size="20" autocomplete="off" [(ngModel)]="labelModel.name" #name="ngModel" (keyup)="existValid(labelModel.name)">
                    <span class="tooltip-content">
                      {{'LABEL.NAME_ALREADY_EXIST' | translate }}
                    </span>
                </label>
            </label>
            <label>
                <label for="color">{{'LABEL.COLOR' | translate}}</label>
                <clr-dropdown [clrCloseMenuOnItemClick]="false">
                    <button type="button" class="btn btn-outline btnColor btn-sm" clrDropdownTrigger>
                        <clr-icon shape="caret down" size="20" style='right:2px; width:24px; height:18px;'></clr-icon>
                    </button>
                    <clr-dropdown-menu *clrIfOpen>
                        <label type="button" class="dropdown-item" (click)="labelModel.color=i" *ngFor="let i of labelColor" [ngStyle]="{'background-color': i}">Aa</label>
                    </clr-dropdown-menu>
                </clr-dropdown>
                <input type="text" id="color" size="8" name="color" [(ngModel)]="labelModel.color"  #color="ngModel">
            </label>
            <label>
                <label for="description">{{'LABEL.DESCRIPTION' | translate}}</label>
                <input type="text" id="description" name="description" size="30" [(ngModel)]="labelModel.description" #description="ngModel">
            </label>
            <label>
                <button type="button" class="btn btn-sm btn-outline" (click)="onCancel()"  [disabled]="inProgress">{{ 'BUTTON.CANCEL' | translate }}</button>
                <button type="submit" class="btn btn-sm btn-primary" (click)="onSubmit()"  [disabled]="!isValid">{{ 'BUTTON.OK' | translate }}</button>
            </label>
        </section>
    </form>
</div>`;