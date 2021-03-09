/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface JgGallery {
        "preferredHeight": number;
    }
    interface JgPhoto {
        "getDimensions": () => Promise<unknown>;
        "height": number;
        "load": () => Promise<void>;
        "show": (scale?: number) => Promise<void>;
        "src": string;
        "width": number;
    }
    interface MyToggleButton {
        "on": boolean;
        "text": string;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLJgGalleryElement extends Components.JgGallery, HTMLStencilElement {
    }
    var HTMLJgGalleryElement: {
        prototype: HTMLJgGalleryElement;
        new (): HTMLJgGalleryElement;
    };
    interface HTMLJgPhotoElement extends Components.JgPhoto, HTMLStencilElement {
    }
    var HTMLJgPhotoElement: {
        prototype: HTMLJgPhotoElement;
        new (): HTMLJgPhotoElement;
    };
    interface HTMLMyToggleButtonElement extends Components.MyToggleButton, HTMLStencilElement {
    }
    var HTMLMyToggleButtonElement: {
        prototype: HTMLMyToggleButtonElement;
        new (): HTMLMyToggleButtonElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "jg-gallery": HTMLJgGalleryElement;
        "jg-photo": HTMLJgPhotoElement;
        "my-toggle-button": HTMLMyToggleButtonElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface JgGallery {
        "preferredHeight"?: number;
    }
    interface JgPhoto {
        "height"?: number;
        "src"?: string;
        "width"?: number;
    }
    interface MyToggleButton {
        "on"?: boolean;
        "onSwitchOff"?: (event: CustomEvent<boolean>) => void;
        "text"?: string;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "jg-gallery": JgGallery;
        "jg-photo": JgPhoto;
        "my-toggle-button": MyToggleButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "jg-gallery": LocalJSX.JgGallery & JSXBase.HTMLAttributes<HTMLJgGalleryElement>;
            "jg-photo": LocalJSX.JgPhoto & JSXBase.HTMLAttributes<HTMLJgPhotoElement>;
            "my-toggle-button": LocalJSX.MyToggleButton & JSXBase.HTMLAttributes<HTMLMyToggleButtonElement>;
        }
    }
}
