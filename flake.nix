{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
      in
        with pkgs; {
          devShell = mkShell {
            packages = [
              nodejs_22
              vite
              bun
              yarn
            ];
            # shellHook = ''
            # '';
          };
        }
    );
}
